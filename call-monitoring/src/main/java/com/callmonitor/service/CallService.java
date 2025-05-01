package com.callmonitor.service;

import com.callmonitor.model.Call;
import com.callmonitor.repository.CallRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class CallService {

    @Autowired
    private CallRepository callRepo;

    // Get all call records
    public List<Call> getAllCalls() {
        return callRepo.findAll();
    }

    // Get active call records
    public List<Call> getActiveCalls() {
        return callRepo.findByStatus("ACTIVE");
    }

    // Save a call record
    public Call saveCall(Call call) {
        if (call.getTimestamp() == null) {
            call.setTimestamp(LocalDateTime.now());
        }
        return callRepo.save(call);
    }
}
