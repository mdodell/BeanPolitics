function pies = piefinale(plota,names)
lengtha = length(plota);

count = 1;

for k=1:lengtha
    if plota(1,k)>1
        explode(1,count) = 1;
        count = count + 1;
    else
        explode(1,count) = 0;
        count = count + 1;
    end
end


explode = (1:lengtha);
disp(explode)
labels = string(names);
pies = pie3(plota,explode,labels);

end