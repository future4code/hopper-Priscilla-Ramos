export const goToLogin =(navigate)=>{
    navigate("/login")
}

export const goToHome =(navigate)=>{
    navigate("/")
}

export const goToAdminTripsList =(navigate)=>{
    navigate("/admin/trips/list")
}

export const goToTripsList =(navigate)=>{
    navigate("/trips/list")
}

export const goToAdminTipsCreate =(navigate)=>{
    navigate("/admin/trips/create")
}

export const goToAplly =(navigate, id, name)=>{
    navigate(`/trips/application/${id}`)
}




