package com.callmonitor.repository;

import com.callmonitor.model.Call;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CallRepository extends JpaRepository<Call, Long> {
    List<Call> findByStatus(String status);
}
