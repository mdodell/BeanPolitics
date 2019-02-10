filename = '1976-2016-president.xlsx';
A = xlsread(filename);
[num,txt,raw] = xlsread('1976-2016-president.xlsx');
c1976 = 0;
c1980 = 0;
c1984 = 0;
c1988 = 0;
c1992 = 0;
c1996 = 0;
c2000 = 0;
c2004 = 0;
c2008 = 0;
c2012 = 0;
c2016 = 0;


for i=1:3739
    if num(i) == 1976
        c1976 = c1976 + 1;
    end
    
    if num(i) == 1980
        c1980 = c1980 + 1;
    end

    if num(i) == 1984
        c1984 = c1984 + 1;
    end

    if num(i) == 1988
        c1988 = c1988 + 1;
    end
    
    if num(i) == 1992
        c1992 = c1992 + 1;
    end
    
    if num(i) == 1996
        c1996 = c1996 + 1;
    end
    
    if num(i) == 2000
        c2000 = c2000 + 1;
    end
    
    if num(i) == 2004
        c2004 = c2004 + 1;
    end
    
    if num(i) == 2008
        c2008 = c2008 + 1;
    end
    
    if num(i) == 2012
        c2012 = c2012 + 1;
    end
    
    if num(i) == 2016
        c2016 = c2016 + 1;
    end
end
c1980 = c1980 + c1976;
c1984 = c1984 + c1980;
c1988 = c1988 + c1984;
c1992 = c1992 + c1988;
c1996 = c1996 + c1992;
c2000 = c2000 + c1996;
c2004 = c2004 + c2000;
c2008 = c2008 + c2004;
c2012 = c2012 + c2008;
c2016 = c2016 + c2012;


stateArray = raw(:,6);
stateArray = stateArray(c2012:c2016,1);
stateparam = size(stateArray);
up = stateparam(1,1);
logicstate = 1:up;
logicstate = rot90(logicstate);
logicstate = string(logicstate);
logictest = (1:up);
logictest = rot90(logictest);
qstate = input('Enter State: ','s');   
testi = 0;
testf = 0;
for k = 1:up
    logicstate(1:k) = qstate;
end
for k = 1:up
   testi = logicstate(k,1);
   testf = stateArray(k,1);
   logictest(k,1) = ismember(testi,testf);
end

statecount = state(c2012,c2016,logictest);
stateindex = stater(statecount,logictest);

endstate = c2012 + stateindex-2;                      %swap c2012 with year var
beginstate = c2012 + stateindex-statecount-1;            %here too

plota = plotx(endstate,beginstate,num);
disp(plota);

plota = piepre(plota);
names = candidates(beginstate,plota,txt);
piefinale(plota,names)

