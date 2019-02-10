function pre = piepre(plota)

lengtha = length(plota);
counter = 0;

for k = 1:lengtha
    if plota(1,k)>1
        counter = counter + 1;
    end
end

plotx = (1:counter);
plotxf = 0;
counter2 = 1;
for k = 1:lengtha
    if plota(1,k)>1
       plotx(counter2) = plota(k);
       counter2 = counter2 + 1;
    else
        plotxf = plotxf + plota(1,k);
    end
end
disp(plotx)
pre = plotx;
end