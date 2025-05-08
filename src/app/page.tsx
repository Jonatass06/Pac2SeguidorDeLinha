import { subjects } from '@/subjects/subjects';
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/'+subjects[0].slug); 
}