def add_visit(self):
    self.visiting_count += 1
    # One visit for one user


def add_view(self):
    self.views_count += 1


def get_film_address(instance, filename):
    hashed_filename = md5(instance.ID)
    new_filename = 'Film_' + hashed_filename.hexdigest()
    return 'Films/{}/{}/{}'.format(
        new_filename[0:1],
        new_filename[2:3],
        new_filename)


def get_film_poster_address(instance, filename):
    hashed_filename = md5(instance.username)
    new_filename = 'poster_' + hashed_filename.hexdigest()
    return 'Films/{}/{}/Images/{}'.format(
        new_filename[0:1],
        new_filename[2:3],
        new_filename)


def get_film_image_address(instance, filename):
    hashed_filename = md5(instance.film.username)
    new_filename = 'img_' +  \
        (FilmImage.objects.all().filter(film=instance.film).count() + 1) + \
        '_' + hashed_filename.hexdigest()
    return 'Films/{}/{}/Images/{}'.format(
        new_filename[0:1],
        new_filename[2:3],
        new_filename)


def get_film_trailer_address(instance, filename):
    hashed_filename = md5(instance.ID)
    new_filename = 'trailer_' + \
        + (Trailer.objects.all().filter(film=instance.film).count() + 1) + \
        '_' + hashed_filename.hexdigest()
    return 'Films/{}/{}/Trailers/{}'.format(
        new_filename[0:1],
        new_filename[2:3],
        new_filename)
