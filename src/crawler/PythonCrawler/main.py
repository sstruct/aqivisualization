# -*- coding: utf-8 -*-
# 本爬虫用于爬取百度百科关于香农的有关页面
import urllib2
import cookielib
from bs4 import BeautifulSoup
url = "http://baike.baidu.com/view/607030.htm"  # 香农起始页

if __name__ == "__main__":
    root_url = url
    obj_spider = SpiderMain()
    obj_spider.craw(root_url)
