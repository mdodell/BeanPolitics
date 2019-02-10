function interest = stater(statecount,logictest)

n = statecount + logictest(1,1);


for k=1:346
    if logictest(k,1) == 1
        n = k;
    end
end
interest = n;
end