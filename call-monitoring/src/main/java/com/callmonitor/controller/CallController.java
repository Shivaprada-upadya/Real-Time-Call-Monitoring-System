package com.callmonitor.controller;

import com.callmonitor.model.Call;
import com.callmonitor.service.CallService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/calls")
@CrossOrigin(origins = "*")
public class CallController {

    @Autowired
    private CallService callService;

    @GetMapping
    public List<Call> getAllCalls() {
        return callService.getAllCalls();
    }

    @GetMapping("/active")
    public List<Call> getActiveCalls() {
        return callService.getActiveCalls();
    }

    @PostMapping
    public Call addCall(@RequestBody Call call) {
        return callService.saveCall(call);
    }
}
