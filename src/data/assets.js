const imageFiles = [
  'CGA-01-campus-exterior.png_bee9638b.jpg','CGA-02-school-courtyard.png_f4c03c82.jpg','CGA-03-school-reception.png_23e6051b.jpg',
  'CGA-04-nursery-classroom.png_1e465d04.jpg','CGA-05-nursery-creative-learning.png_abde6d9f.jpg','CGA-06-nursery-outdoor-play.png_afe657f8.jpg',
  'CGA-07-primary-classroom.png_42d3ff3b.jpg','CGA-08-primary-collaborative-learning.png_b7a51a1b.jpg','CGA-09-primary-library.png_454673bf.jpg',
  'CGA-10-secondary-classroom.png_cd15ec26.jpg','CGA-11-science-laboratory.png_514de1a8.jpg','CGA-12-computer-laboratory.png_71be74a1.jpg',
  'CGA-13-teacher-pupil-interaction.png_2ba81f4d.jpg','CGA-14-teacher-team.png_abd48e07.jpg','CGA-15-school-sports.png_8512b22e.jpg',
  'CGA-16-creative-arts.png_7a29d7ed.jpg','CGA-17-school-arrival.png_1e0160ea.jpg','CGA-18-student-community.png_99e2c176.jpg'
]
export const photo = (id) => `/images/${imageFiles[id - 1]}`
export const photoLabels = {
  1: 'The Cedar Grove Academy campus exterior', 2: 'The school courtyard', 3: 'The school reception area',
  4: 'Children learning in the Nursery classroom', 5: 'A Nursery creative learning activity', 6: 'Nursery pupils enjoying outdoor play',
  7: 'A Primary classroom', 8: 'Pupils learning together in Primary', 9: 'The Primary library', 10: 'A Secondary classroom',
  11: 'Pupils exploring science in the laboratory', 12: 'The computer laboratory', 13: 'A teacher supporting a pupil',
  14: 'Members of the school teaching team', 15: 'Pupils taking part in sports', 16: 'Pupils working on creative art',
  17: 'A pupil arriving at school', 18: 'Pupils sharing a moment as a school community'
}
