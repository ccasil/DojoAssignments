# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2018-02-27 20:26
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('log_reg', '0007_auto_20180227_1032'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='added_by',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='wishes', to='log_reg.User'),
            preserve_default=False,
        ),
    ]
