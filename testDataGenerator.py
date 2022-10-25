# Script for generating test data
import datetime
import random

FILE_NAME = 'testDataYear'
START_DATE = '25 10 2021'		# Format like 'dd mm yyyy'

# today = time(date.today().strftime('%d %b %Y')
d, m, y = START_DATE.split(' ')
today = datetime.date.today()
start = datetime.date(int(y), int(m), int(d))

times = ['13:42:26','13:52:33','13:32:18','13:22:11','13:12:04','13:01:57','12:51:50','12:41:43','12:31:36','12:21:28','12:11:21','12:01:14','11:51:07','11:41:00','11:30:52','11:20:45','11:10:38','11:00:31','10:50:23','10:40:16','10:30:09','10:20:02','10:09:55','09:59:48','09:49:40','09:39:33','09:29:26','09:19:19','09:09:12','08:59:05']

endstr = '{  fill-color: #F05323; }'

# Create or overwrite file
with open(FILE_NAME + '.csv', 'w+') as f:
    f.write(f'Date (GMT +11);{FILE_NAME}\n')
    while start <= today:
        for t in times:
            date = start.strftime('%d %b %Y')
            # rtemp = float(random.randrange(2500, 3500)) / 100
            rtemp = round(random.uniform(25, 35), 2)
            f.write(f'{date} {t};{rtemp:.2f},point {endstr}\n')
        
        start += datetime.timedelta(days=1)
    
    
    
