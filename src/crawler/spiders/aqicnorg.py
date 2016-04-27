# -*- coding: utf8 -*-
# POST_URL="http://0.0.0.0:8080/data/write"
# POST_NAME="AQICN"

from bs4 import BeautifulSoup
import json,re,cookielib,time,datetime,sys,requests

reload(sys)
sys.setdefaultencoding('utf8')

# 获取页面函数
def getpage(link):
    r = s.get(link)
    content=r.content
    if r.status_code == 503:
        content = getpage(link)
    return content

# 提取数据
def getdata(content):
    soup = BeautifulSoup(content, 'lxml')
    table = soup.find('table', 'aqigraphtable')
    sitedata = {}
    for i in range(len(vmap)):
        tr = 'tr_' + vmap[i]
        cur = 'cur_' + vmap[i]
        try:
            sitedata[tmap[i]] = table.find('tr', id = tr).find('td', id = cur).text
        except:
            sitedata[tmap[i]] = '-'
    return sitedata

# 解析数据为目标格式
def parse(link):
    try:
        print link
        content = getpage(link)
    except Exception as err:
        print "(failed)"+str(err)
        logFile.write("(failed)"+str(err)+"\n")
        time.sleep(5)
        content = getpage(link)
    sitedata = getdata(content)
    sitesdata[sites[link]] = sitedata
    print sites[link]
    print sitedata

logFile = open("aqicn.log", 'a')
logFile.write(datetime.datetime.fromtimestamp(time.time()).strftime("\n----%Y-%m-%d %H:%M:%S----\n"))
sites = json.loads(open("sites.txt",'r').read())
vmap = ['pm25','co','pm10','o3','so2','no2']
tmap = ["PM2_5","CO","PM10","O3","SO2","NO2"]
sitesdata = {}
s = requests.Session()
for link in sites:
    parse(link)

outfile = open("data.txt",'w')
jsonCoded=json.dumps(sitesdata, ensure_ascii=False)
outfile.write(jsonCoded)
# postDict = {"content":jsonCoded,"key":POST_NAME}
# resp = requests.post(POST_URL,data=postDict)
# logFile.write("Response:"+resp.content+"\n")
# print resp.content
print jsonCoded
# print sitesdata

# logFile.close()
# resp.close()
outfile.close()
