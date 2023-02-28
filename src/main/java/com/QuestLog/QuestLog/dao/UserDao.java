package com.QuestLog.QuestLog.dao;

import com.QuestLog.QuestLog.model.User;

public interface UserDao {
    User findByUsername(String username);
    boolean create(String username, String password);
}
