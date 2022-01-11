import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import { HomePage } from './components/Home.page'
import { RQSuperHeroPage } from './components/RQSuperHero.page'
import { SuperHeroesPage } from './components/SuperHero.page'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools} from 'react-query/devtools'
import { RQCricketersPage } from './components/RQCricketers.page'
import { RQSuperHeroIdPage } from './components/RQSuperHeroId.page'
import { ParallelQueryPage } from './components/ParallelQuery.page'
import { DynamicParallelPage } from './components/DynamicParallel.page'
import { DependentQueriesPage } from './components/DependentQueries.page'
import { PaginatePage } from './components/Paginate.page'
import { InfiniteQueryPage } from './components/InfiniteQuery.page'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
              <li>
                <Link to='/cricketers'>Cricketers</Link>
              </li>
              <li>
                <Link to='/rq-parallel'>Parallel Query</Link>
              </li>
              <li>
                <Link to='/rq-paginate'>Paginate Query</Link>
              </li>
              <li>
                <Link to='/rq-infinte'>Infinte</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/super-heroes' element={<SuperHeroesPage/>} />

            <Route path='/rq-super-heroes' element={<RQSuperHeroPage/>} />

            <Route path='/cricketers' element={<RQCricketersPage/>} />
 
            <Route path='/' element={<HomePage/>} />

            <Route path='/rq-super-heroes/:heroId' element={<RQSuperHeroIdPage />} />

            <Route path='/rq-parallel' element={<ParallelQueryPage />} />

            <Route path='/rq-dynamic-paralell' element={<DynamicParallelPage heroId={[1,3]} />} />

            <Route path='/rq-depends' element={<DependentQueriesPage email={'sathish@gmail.com'} />} />

            <Route path='/rq-paginate' element={<PaginatePage />} />

            <Route path='/rq-infinte' element={<InfiniteQueryPage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
      </QueryClientProvider>
  );
}

export default App;
