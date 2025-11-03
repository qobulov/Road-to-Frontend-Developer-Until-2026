import {Stack} from '@mui/material'
import {category,colors} from '../constants'

const Category = () => {
  return (
    <Stack>
      {category.map((item) => (
        <button key={item.name} className="category-btn" >
            <span style= {{color: colors.primary, marginRight:15}}>{item.icon}</span>
            <span style={{opacity:0.7}}>{item.name}</span>
        </button> 
      ))}
    </Stack>
  )
}
export default Category