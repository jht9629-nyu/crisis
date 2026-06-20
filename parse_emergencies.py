import urllib.request
import json
import re
from html.parser import HTMLParser

class WikipediaTableParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_table = False
        self.in_tbody = False
        self.in_tr = False
        self.in_td = False
        self.in_th = False
        
        self.table_headers = []
        self.current_row = []
        self.current_cell_text = []
        self.rows = []
        
        self.current_link = None
        self.cell_links = []
        self.in_link = False

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        
        if tag == 'table':
            classes = attrs_dict.get('class', '')
            if 'wikitable' in classes:
                self.in_table = True
        elif self.in_table:
            if tag == 'tbody':
                self.in_tbody = True
            elif tag == 'tr':
                self.in_tr = True
                self.current_row = []
            elif tag == 'td' and self.in_tr:
                self.in_td = True
                self.current_cell_text = []
                self.cell_links = []
            elif tag == 'th' and self.in_tr:
                self.in_th = True
                self.current_cell_text = []
            elif tag == 'a' and (self.in_td or self.in_th):
                self.in_link = True
                href = attrs_dict.get('href', '')
                if href.startswith('/wiki/'):
                    self.current_link = 'https://en.wikipedia.org' + href
                else:
                    self.current_link = href

    def handle_endtag(self, tag):
        if tag == 'table':
            self.in_table = False
        elif tag == 'tbody':
            self.in_tbody = False
        elif tag == 'tr' and self.in_table:
            self.in_tr = False
            if self.current_row:
                self.rows.append(self.current_row)
        elif tag == 'td' and self.in_tr:
            self.in_td = False
            cell_content = "".join(self.current_cell_text).strip()
            cell_content = re.sub(r'\[\d+\]', '', cell_content)
            self.current_row.append({
                'text': cell_content,
                'links': self.cell_links
            })
        elif tag == 'th' and self.in_tr:
            self.in_th = False
            header_content = "".join(self.current_cell_text).strip()
            self.current_row.append({
                'text': header_content,
                'is_header': True
            })
        elif tag == 'a':
            self.in_link = False
            self.current_link = None

    def handle_data(self, data):
        if self.in_td or self.in_th:
            self.current_cell_text.append(data)
            if self.in_link and self.current_link:
                link_item = {'text': data.strip(), 'url': self.current_link}
                if link_item['text'] and link_item not in self.cell_links:
                    self.cell_links.append(link_item)

def main():
    url = "https://en.wikipedia.org/wiki/List_of_national_emergencies_in_the_United_States"
    print(f"Fetching {url}...")
    
    req = urllib.request.Request(
        url, 
        headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
    )
    
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
    
    print("Parsing HTML...")
    parser = WikipediaTableParser()
    parser.feed(html)
    
    print(f"Found {len(parser.rows)} rows in table.")
    
    trump_emergencies = []
    
    for row in parser.rows:
        is_trump = False
        for cell in row:
            if isinstance(cell, dict) and 'text' in cell and 'Trump' in cell['text']:
                is_trump = True
                break
        
        if is_trump and len(row) >= 7:
            def get_cell(idx, default=''):
                if idx < len(row):
                    return row[idx].get('text', default)
                return default
                
            def get_cell_links(idx):
                if idx < len(row):
                    return row[idx].get('links', [])
                return []
            
            status = get_cell(0)
            president = get_cell(1)
            start_date = get_cell(2)
            end_date = get_cell(3)
            category = get_cell(4)
            source = get_cell(5)
            title = get_cell(6)
            description = get_cell(7)
            
            if 'Trump' not in president and 'Trump' in status:
                continue
                
            trump_emergencies.append({
                'status': status,
                'president': president,
                'start_date': start_date,
                'end_date': end_date if end_date else 'Active (or renewed)',
                'category': category,
                'source': source,
                'source_links': get_cell_links(5),
                'title': title,
                'description': description
            })
            
    print(f"Extracted {len(trump_emergencies)} emergency declarations for Trump.")
    
    output_path = "/Users/jht2/Documents/projects/_2026/dano-vibe/crisis/data.json"
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(trump_emergencies, f, indent=4, ensure_ascii=False)
        
    print(f"Data saved to {output_path}")

if __name__ == "__main__":
    main()
