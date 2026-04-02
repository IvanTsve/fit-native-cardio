import { supabase } from '@/lib/supabase'

async function getWorkouts() {
    const { data, error } = await supabase.from('workouts').select();
    
    if (error) {
        console.error(error)
        return []
    }
    return data
}
export { getWorkouts };