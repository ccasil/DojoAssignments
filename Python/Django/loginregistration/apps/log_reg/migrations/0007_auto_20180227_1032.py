# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2018-02-27 18:32
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('log_reg', '0006_auto_20180227_1018'),
    ]

    operations = [
        migrations.RenameField(
            model_name='item',
            old_name='added_by',
            new_name='users',
        ),
    ]
