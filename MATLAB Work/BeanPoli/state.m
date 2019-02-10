function statef = state(c2012,c2016,logictest)
stateff = c2016-c2012;
counter = 0;
for k = 1:346
    if logictest(k,1) == 1
        counter = counter + 1;
    end
end

statef = counter;

end


