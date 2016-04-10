# -*- coding: utf-8 -*-
import requests
from bs4 import BeautifulSoup

res=requests.get('http://aqicn.org/city/all/cn/#中国/m')
soup=BeautifulSoup(res.content)
print soup.prettify()
