# Generated by Django 2.2.4 on 2019-10-21 11:05

import apps.utils
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('actors', '0002_auto_20191021_1103'),
    ]

    operations = [
        migrations.AlterField(
            model_name='actor',
            name='avatar',
            field=models.ImageField(null=True, upload_to=apps.utils.SetAddressFunctionsClass.set_address_for_file_field),
        ),
        migrations.AlterField(
            model_name='actorimage',
            name='image',
            field=models.ImageField(null=True, upload_to=apps.utils.SetAddressFunctionsClass.set_address_for_file_field),
        ),
    ]
