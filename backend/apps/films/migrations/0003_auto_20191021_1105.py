# Generated by Django 2.2.4 on 2019-10-21 11:05

import apps.films.validators
import apps.utils
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('films', '0002_auto_20191021_1103'),
    ]

    operations = [
        migrations.AlterField(
            model_name='film',
            name='film_file',
            field=models.FileField(null=True, upload_to=apps.utils.SetAddressFunctionsClass.set_address_for_file_field, validators=[apps.films.validators.validate_film_file_type]),
        ),
        migrations.AlterField(
            model_name='film',
            name='poster_file',
            field=models.ImageField(null=True, upload_to=apps.utils.SetAddressFunctionsClass.set_address_for_file_field),
        ),
        migrations.AlterField(
            model_name='filmimage',
            name='image_file',
            field=models.ImageField(null=True, upload_to=apps.utils.SetAddressFunctionsClass.set_address_for_file_field),
        ),
        migrations.AlterField(
            model_name='trailer',
            name='trailer_file',
            field=models.FileField(null=True, upload_to=apps.utils.SetAddressFunctionsClass.set_address_for_file_field),
        ),
    ]
