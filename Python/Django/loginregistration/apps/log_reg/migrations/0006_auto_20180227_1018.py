# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2018-02-27 18:18
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('log_reg', '0005_auto_20180227_0952'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='item',
            name='added_by',
        ),
        migrations.AddField(
            model_name='item',
            name='added_by',
            field=models.ManyToManyField(related_name='items', to='log_reg.User'),
        ),
    ]
