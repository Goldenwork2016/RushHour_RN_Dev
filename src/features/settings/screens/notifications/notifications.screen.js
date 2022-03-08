import React, {useState} from 'react';

import UserImage from '../../../../../assets/person.png';
import Alert from '../../../../../assets/alert.png';
import DeleteIcon from '../../../../../assets/delete.png';
import {
  OnScroll,
  NotificationContainer,
  Notification,
  Title,
  ImageIcon,
  NotificationText,
  TimeText,
  DeleteOverly,
  Delete,
  OnTouch,
} from '../../components/notifications-components/notification.styles';

const NotificationScreen = () => {
  const DATA = [
    {
      id: 1,
      title:
        'Hey! You have a new training recommendation. Check it out on the dashboard.',
      image: '',
      date: '01:30 pm',
    },
    {
      id: 2,
      title: 'You’re halfway to your next reward. Cool.',
      image: '',
      date: '02:30 pm',
    },
  ];
  const [data, setData] = useState(DATA);
  const [show, setShow] = useState(null);

  const showDeleteButton = id => {
    setShow(id);
  };

  const onRemove = index => {
    const newData = data;
    newData.splice(index, 1);
    setData([...newData]);
  };

  return (
    <OnScroll>
      <NotificationContainer>
        {data ? <Title>Today</Title> : null}
        {data.map((item, index) => (
          <Notification key={item.id} onPress={() => showDeleteButton(item.id)}>
            <ImageIcon source={UserImage} />
            <NotificationText>{item.title}</NotificationText>
            <TimeText>{item.date}</TimeText>
            {show === item.id ? (
              <DeleteOverly onPress={() => setShow(null)}>
                <OnTouch onPress={() => onRemove(index)}>
                  <Delete source={DeleteIcon} />
                </OnTouch>
              </DeleteOverly>
            ) : null}
          </Notification>
        ))}

        <Title>Earlier</Title>
        <Notification>
          <ImageIcon source={Alert} />
          <NotificationText>Oh man. No driving time left.</NotificationText>
          <TimeText>01:30 pm</TimeText>
        </Notification>
        <Notification>
          <ImageIcon source={UserImage} />
          <NotificationText>
            Daily awesomeness reminder. Keep trucking.
          </NotificationText>
          <TimeText>01:30 pm</TimeText>
        </Notification>
        <Notification>
          <ImageIcon source={UserImage} />
          <NotificationText>
            Eyes closing? Take a break. Falling asleep at the wheel is pretty
            uncomfortable. (And dangerous.)
          </NotificationText>
          <TimeText>01:30 pm</TimeText>
        </Notification>
        <Notification>
          <ImageIcon source={UserImage} />
          <NotificationText>
            50% completed! half way to receiving your next reward!
          </NotificationText>
          <TimeText>01:30 pm</TimeText>
        </Notification>
        <Notification>
          <ImageIcon source={UserImage} />
          <NotificationText>
            You’re halfway to your next reward. Cool.
          </NotificationText>
          <TimeText>01:30 pm</TimeText>
        </Notification>
      </NotificationContainer>
    </OnScroll>
  );
};

export default NotificationScreen;
