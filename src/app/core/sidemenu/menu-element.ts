export const menus = [
  {
    'name': 'Branches',
    'icon': 'cast_for_education',
    'link': '/dashboard',
    'open': false,
    'chip': {'value': 1, 'color': 'accent'},
  },
   /*{
    'name': 'Tuition',
    'icon': 'file_copy',
    'link': false,
    'open': false,
    'chip': false,
    'sub': []}
      */
    {
        'name': 'All Subjects',
        'icon': 'book',
        'link': '/tuition/subjects/list',
        'chip': {'value': 2, 'color': 'accent'},
        'open': false,
      },
      {
        'name': 'All Instructors',
        'icon': 'perm_identity',
        'link': '/academy/apprentices/list',
        'chip': {'value': 2, 'color': 'accent'},
        'open': false,
      },
      {
        'name': 'All Students',
        'icon': 'filter_list',
        'link': '/tuition/students',
        'chip': {'value': 2, 'color': 'accent'},
        'open': false,
      }
    ]
  },
      },
      {
        'name': 'All Staffs',
        'icon': 'perm_identity',
        'link': '/tuition/staffs/list',
        'chip': {'value': 2, 'color': 'accent'},
        'open': true,
      },


];
