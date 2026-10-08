import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import ScrollToTop from '@/components/ScrollToTop';
import { StoreProvider } from '@/context/StoreContext';
import { Header, Footer } from '@/components/store/Shell';
import Index from '@/pages/Index';
import { ShopPage, CategoryPage, CollectionsPage } from '@/pages/ShopPages';
import ProductPage from '@/pages/ProductPage';
import { CartPage, CheckoutPage, WishlistPage, AccountPage, TrackingPage } from '@/pages/CommercePages';
import { AboutPage, JournalPage, ArticlePage, ContactPage, FaqPage, SizeGuidePage, ShippingPage, PolicyPage } from '@/pages/EditorialPages';
import NotFound from '@/pages/NotFound';
import '@/styles/atelier.css';

const client=new QueryClient();
function Layout(){const {pathname}=useLocation();const bare=pathname==='/checkout';return <>{!bare&&<Header/>}<Routes>
 <Route path="/" element={<Index/>}/><Route path="/shop" element={<ShopPage/>}/><Route path="/category/:slug" element={<CategoryPage/>}/><Route path="/collections" element={<CollectionsPage/>}/><Route path="/collections/:slug" element={<CollectionsPage/>}/><Route path="/product/:slug" element={<ProductPage/>}/>
 <Route path="/cart" element={<CartPage/>}/><Route path="/checkout" element={<CheckoutPage/>}/><Route path="/wishlist" element={<WishlistPage/>}/><Route path="/account" element={<AccountPage/>}/><Route path="/account/:section" element={<AccountPage/>}/><Route path="/track-order" element={<TrackingPage/>}/>
 <Route path="/about" element={<AboutPage/>}/><Route path="/journal" element={<JournalPage/>}/><Route path="/journal/:slug" element={<ArticlePage/>}/><Route path="/contact" element={<ContactPage/>}/><Route path="/faq" element={<FaqPage/>}/><Route path="/size-guide" element={<SizeGuidePage/>}/><Route path="/shipping" element={<ShippingPage/>}/><Route path="/returns" element={<ShippingPage/>}/><Route path="/shipping-returns" element={<ShippingPage/>}/><Route path="/policies/:slug" element={<PolicyPage/>}/>
 <Route path="*" element={<NotFound/>}/>
 </Routes>{!bare&&<Footer/>}</>}
export default function App(){return <QueryClientProvider client={client}><TooltipProvider><Toaster/><Sonner/><StoreProvider><BrowserRouter><ScrollToTop/><Layout/></BrowserRouter></StoreProvider></TooltipProvider></QueryClientProvider>}
