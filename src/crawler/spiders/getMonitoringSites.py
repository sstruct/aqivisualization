# -*- coding: utf8 -*-
import requests, re, codecs, json
from bs4 import BeautifulSoup

# 取到监测点列表所在网页
# res=requests.get('http://aqicn.org/city/all/cn/#中国/m')
# soup=BeautifulSoup(res.content, 'lxml')

# 本地测试文件
res=open('text.html')
soup=BeautifulSoup(res,'lxml').body

# 取到所有监测点和对应的链接
sites={}
for ele in soup.find_all('a',{'href':re.compile('^http://aqicn.org/city/')}):
    link=ele.get('href')
    sites[link]=ele.get_text()
print len(sites)

# 保存列表为 sites.txt
outfile = codecs.open('sites.txt','w','utf-8')
stations_write = json.dumps(sites,ensure_ascii=False)
outfile.write(stations_write)
outfile.close()
