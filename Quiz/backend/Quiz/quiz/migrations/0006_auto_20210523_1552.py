# Generated by Django 3.2 on 2021-05-23 15:52

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0005_auto_20210520_2314'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='ques_no',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='profile',
            name='latest_que_time',
            field=models.TimeField(default=datetime.datetime(2021, 5, 23, 15, 52, 2, 642221)),
        ),
    ]
