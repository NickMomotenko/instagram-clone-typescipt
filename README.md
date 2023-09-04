# Instagram concept

Frontend часть

Login page ('/auth')


# Main ('/')
    - список чатов

    Каждый пост содержит в себе:
        - информация об авторе;
        - фото / набор фото (custom slider) / видео
        - опции взаимодействия с постом
            - like / dislike , comment, share ,save to saved posts;
        - комментарии
            - добавление , редактирование , удаление;

    Функционал работы с постами через опции (кнопка 'опции' в верхнем правом углу поста):
        - кнопка 'Report' - открывает область создания жалобы на пост
            вы можете оставить свой report текст и нажать на кнопку 'report' (на данный момент репорты не сохраняються в статистике поста и никак не влияють на его отображние);
        - кнопка 'Share to' - позволяет зашейрить ваш пост в любую другую социальную сеть;
        - кнопка 'Copy link' - возможность поделиться ссылкой на пост;
        - кнопка 'Delete' - доступна только в случае если этот пост пренадлежит вам;
        - кнопка 'Cancel' - закрывает плажку с опциями;

# Direct ('/direct')
    - список чатов
    - область переписки с текущим выбранным человеком

    Функционал работы с сообщениями:
    - добавление сообщения (если поле ввода не пустое - то при нажании на кнопку 'Send' сообщение отправится);
    - удаление сообщения (пкм по сообщению - delete);
    - редактирование сообщения (пкм по сообщению - change);
    - есть возможность записи голосового сообщения (удерживание кнопки с микрофоном):
        - при удерживании кнопки микрофона - появляется рядом таймер длительности, именно он поможет пользователю узнать длительность его сообщения;
        - после того как кнопка микрофона отжата у вас есть возможность прослушать свое голосовое перед отправкой;
        - после прослушивания вы можете либо удалить голосовое сообщение (нажав на черный крестик), либо же отправить его в чат;
        - вы также можете добавить опционально комментарий к голосовому сообщению до момента отправки;

# Profile ('/profile')
    - блок информации профиля пользователя
    - блок постов пользователя

    Функционал работы с профилем:
        - нажатие кнопки 'Create post' открывает попап создания поста
            - добавьте фото и/или видео;
            - добавьте комментарий (кол-во символов ограничено до 255);
            - нажмите кнопку 'Create' для создания поста, либо же кнопку 'Cancel' для отмены действий;
        - нажатие кнопки 'Edit' сопуствует появлению формы 'Edit profile'
            - возможность обновить аватар пользователя;
            - возможность редактирования анектных данных (некоторые данные заведомо скрыты, но вы можете отобразить их нажатием на кнопку 'More');
            - кнопка 'Save' сохраняет измененные данные / кнопка 'Cancel' оставляет данные в изначальном виде;
        - нажатие на любую сторис в разделе 'Your stories' приведет к открытию страницы stories (пока что на этапе разработки)
