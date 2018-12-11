export const menus = [
  {
    'name': 'Dashboard',
    'icon': 'dashboard',
    'link': '/dashboard',
    'open': false,
    'chip': {'value': 1, 'color': 'accent'},
  },
  {
    'name': 'Tuition',
    'icon': 'dashboard',
    'link': false,
    'open': false,
    'chip': false,
    'sub': [
      {
        'name': 'All Subjects',
        'icon': 'filter_list',
        'link': '/tuition/subjects/list',
        'chip': {'value': 2, 'color': 'accent'},
        'open': false,
      },
      {
        'name': 'All Instructors',
        'icon': 'filter_list',
        'link': '/tuition/instructors/list',
        'chip': {'value': 2, 'color': 'accent'},
        'open': false,
      }
    ]
  },
];
