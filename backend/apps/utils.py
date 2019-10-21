from hashlib import md5

class SetAddressFunctionsClass:
    def __init__(self, file_type_name=None, file_family_name=None, file_subfamily_name=None):
        self.file_type_name = file_type_name
        self.file_family_name = file_family_name
        self.file_subfamily_name = file_subfamily_name

    def set_address_for_file_field(self, instance, filename):
        '''
        Load files only after saving model to DB (after initialising ID)
        '''
        hashed_filename = md5(str(instance.ID).encode('utf-8')).hexdigest()
        filename = self.file_type_name + '_' + hashed_filename
        subfamily = ''
        if self.file_subfamily_name:
            subfamily = self.file_subfamily_name + '/'
        return self.file_family_name + '/{}/{}/{}/'.format(
            hashed_filename[0:2],
            hashed_filename[2:4],
            hashed_filename) + subfamily + filename


if __name__ == '__main__':
    class TestClass:
        def __init__(self, id):
            self.ID = id
    test_class_instance = TestClass(12)
    set_address_functions_class_instance = SetAddressFunctionsClass(
        file_type_name='file_type_name',
        file_family_name='file_family_name',
        file_subfamily_name='file_subfamily_name')
    print(set_address_functions_class_instance.set_address_for_file_field(test_class_instance, 'filename'))
