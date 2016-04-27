# -*- coding: utf-8 -*-
import urllib2
import cookielib
from bs4 import BeautifulSoup
url = "http://www.baidu.com"
# url = "http://www.imooc.com/learn/637"
# url = "http://www.pm25.in/api/querys/all_cities.json"

# print "method 1"
# response = urllib2.urlopen(url)
# print response.getcode()
# print len(response.read())

print "method 2"
request = urllib2.Request(url)
request.add_header('cache-control', 'no-cache')
request.add_header("user-agent", "Mozilla/5.0")
# request.add_header("token", "5j1znBVAsnSf5xQyNQyq")
response = urllib2.urlopen(url)

# print "method 3"
# cj = cookielib.CookieJar()
# opener = urllib2.build_opener(urllib2.HTTPCookieProcessor(cj))
# urllib2.install_opener(opener)
# response = urllib2.urlopen(url)
# print response.getcode()
# print response.read()

# 根据获取到的网页创建 BS 对象
soup = BeautifulSoup(
    response,           # HTML document
    "html.parser",       # HTML parser
    from_encoding='utf-8'    # document encoding
)

# 搜索 BS 文档树 (find_all, find)
# find_all(name, attr, string)
# 查找所有 <a> 标签
links = soup.find_all('a')
for link in links:
    print link.name, link['href'], link.get_text()
# class 是保留字,所以这里的 class 有下划线
# node = soup.find_all('a', href=re.compile(r'/view/\d+\.htm'), class_='cl', sting='something')

# 访问节点信息
# print node.name   # 名称
# print node['href']    # href 属性
# print node.get_text() # 文字内容
