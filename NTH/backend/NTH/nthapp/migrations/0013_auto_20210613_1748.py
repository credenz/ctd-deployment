# Generated by Django 3.2 on 2021-06-13 12:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nthapp', '0012_auto_20210523_1312'),
    ]

    operations = [
        migrations.AddField(
            model_name='playme',
            name='last_level_update_time',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='playme',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='question',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
