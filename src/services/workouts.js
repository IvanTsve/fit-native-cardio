import { supabase } from '@/lib/supabase'

async function getWorkouts() {
    const { data, error } = await supabase.from('workouts').select();
    
    if (error) {
        console.error(error)
        return []
    }
    return data
}

async function getWorkoutById(id) {
    const { data, error } = await supabase.from('workouts').select().eq('id', id);
    if (error) {
        console.error(error)
        return []
    }
    return data
}

async function createWorkout(workout) {
    const { data, error } = await supabase.from('workouts').insert(workout);
    if (error) {
        console.error(error)
        return []
    }
    return data
}

async function updateWorkout(id, workout) {
    const { data, error } = await supabase.from('workouts').update(workout).eq('id', id);
    if (error) {
        console.error(error)
        return []
    }
    return data
}

async function deleteWorkout(id) {
    const { data, error } = await supabase.from('workouts').delete().eq('id', id);
    if (error) {
        console.error(error)
        return []
    }
    return data
}

export { getWorkouts, getWorkoutById, createWorkout, updateWorkout, deleteWorkout };