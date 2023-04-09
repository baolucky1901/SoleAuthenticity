import Layout from '../layouts/Main'
import Footer from '../components/footer'
import StoresContent from './../components/stores-content/index'
import Storecrumb from './../components/storecrumb/index'
import Download from './../components/download-banner/index'

const Stores = () => (
  <Layout>
    <Storecrumb />
    <section className="products-page" style={{ marginTop: '-50px' }}>
      <div className="container" style={{ marginTop: '50px' }}>
        <StoresContent />
      </div>
      <Download />
    </section>
    <Footer />
  </Layout>
)

export default Stores
