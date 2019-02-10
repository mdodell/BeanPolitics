function names = candidates(beginstate,plota,txt)




lengtha = length(plota);
names = {1:lengtha};
starting = beginstate+1;
for k = 1:lengtha
    names(1,k) = txt(starting,8);
    starting = starting + 1;
end
disp(names)
end