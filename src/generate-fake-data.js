import moment from 'moment'

export default function (groupCount = 30, itemCount = 1000, daysInPast = 30) {
const groups = [{ id: 1, title: 'EA62GFV' }, { id: 2, title: 'WX67VKL' }, { id: 3, title: 'GX15DHO' }, { id: 4, title: 'EK62XYS' }]
    const items = [
      {
        id: 1,
        group: 1,
        title: 'Transit',
        start_time: moment("2018-10-11T05:58:00"),
        end_time: moment("2018-10-11T09:48:00")
      },
      {
        id: 2,
        group: 1,
        title: 'Loading',
        start_time: moment("2018-10-11T09:48:00"),
        end_time: moment("2018-10-11T10:29:00")
      },
      {
        id: 3,
        group: 1,
        title: 'Resiting',
        start_time: moment("2018-10-11T10:29:00"),
        end_time: moment("2018-10-11T15:08:00")
      },
      {
        id: 4,
        group: 2,
        title: 'Transit',
        start_time: moment("2018-10-11T05:16:00"),
        end_time: moment("2018-10-11T07:16:00")
      },
      {
        id: 5,
        group: 2,
        title: 'Loading',
        start_time: moment("2018-10-11T07:16:00"),
        end_time: moment("2018-10-11T08:05:00")
      },
      {
        id: 6,
        group: 2,
        title: 'Resiting',
        start_time: moment("2018-10-11T08:05:00"),
        end_time: moment("2018-10-11T15:08:00")
      },
      {
        id: 7,
        group: 3,
        title: 'Transit',
        start_time: moment("2018-10-11T06:37:00"),
        end_time: moment("2018-10-11T10:14:00")
      },
      {
        id: 8,
        group: 3,
        title: 'Loading',
        start_time: moment("2018-10-11T10:14:00"),
        end_time: moment("2018-10-11T11:09:00")
      },
      {
        id: 9,
        group: 3,
        title: 'Resiting',
        start_time: moment("2018-10-11T11:09:00"),
        end_time: moment("2018-10-11T14:41:00")
      }
    ];
  return { groups, items }
}
