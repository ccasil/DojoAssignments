# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2018-02-21 19:04
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('like_books', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='users',
        ),
        migrations.AddField(
            model_name='book',
            name='liked_users',
            field=models.ManyToManyField(related_name='liked_books', to='like_books.User'),
        ),
    ]
