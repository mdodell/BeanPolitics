function = plotx(endstate,beginstate,num)
a = endstate-beginstate;
aa = (1:a);
s = 1;


for k = beginstate:endstate
    aa(1,s) = num(k,4);
    s = s+1;
end
end