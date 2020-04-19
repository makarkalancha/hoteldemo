package com.makco.hoteldemo.repository;

import java.util.List;
import com.makco.hoteldemo.entity.RoomEntity;

public interface RoomRepository extend CrudRepository<RoomEntity, Long>{
	
	List<RoomEntity> findById(Long id); 

}
