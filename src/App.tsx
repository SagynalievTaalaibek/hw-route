import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './containers/Home/Home';
import Contact from './containers/Contact/Contact';
import BookTour from './containers/BookTour/BookTour';
import Portfolio from './containers/Portfolio/Portfolio';
import NewTour from './containers/NewTour/NewTour';
import WatchHomework from './containers/WatchHomework/WatchHomework';
import CountryBlock from './containers/CountryBlock/CountryBlock';
import NotFound from './containers/NotFound';
import { TourInterface } from './types';

const App = () => {
  const [tours, setTours] = useState<TourInterface[]>([
    {
      id: 1,
      name: 'Каньон Сказка',
      description:
        'Небольшое ущелье на южном берегу Иссык-Куля, знаменитое своими красными глиняными скалами',
      price: 100,
      img: 'https://st-1.akipress.org/127/.storage/limon2/images/july2016/f87bf38f5ea0f5f7c686d13d5e2be7c9.jpg',
    },
    {
      id: 2,
      name: 'Ала-Арча',
      description:
        'Ущелье Ала-Арча — это одна из самых знаменитых достопримечательностей',
      price: 200,
      img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/a4/8d/63/ala-archa-gorge.jpg?w=1200&h=1200&s=1',
    },
    {
      id: 3,
      name: 'Ала-Арча 2',
      description:
        'Ущелье Ала-Арча 2 — это одна из самых знаменитых достопримечательностей',
      price: 200,
      img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/a4/8d/63/ala-archa-gorge.jpg?w=1200&h=1200&s=1',
    },
  ]);
  const [cartsTours, setCartTours] = useState<TourInterface[]>([]);

  const addNewTour = (tour: TourInterface) => {
    setTours((prevState) => [...prevState, tour]);
  };

  const addTourToCart = (tour: TourInterface) => {
    setTours((prevState) =>
      prevState.filter((item) => {
        return item.id !== tour.id;
      }),
    );

    setCartTours((prevState) => [...prevState, tour]);
  };

  return (
    <>
      <header className="bg-body-tertiary">
        <Navbar />
      </header>
      <main className="container">
        <Routes>
          <Route
            path="/"
            element={<Home tours={tours} addTourToCart={addTourToCart} />}
          >
            <Route
              path="new-tour"
              element={<NewTour addNewTour={addNewTour} />}
            />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/books" element={<BookTour cartsTours={cartsTours} />} />
          <Route path="/portfolio" element={<Portfolio />}>
            <Route path="homework-movie" element={<WatchHomework />} />
            <Route path="homework-countries" element={<CountryBlock />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
