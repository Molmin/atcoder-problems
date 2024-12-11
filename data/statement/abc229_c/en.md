Score : $300$ points

## Problem Statement

Takahashi, who works for a pizza restaurant, is making a delicious cheese pizza for staff meals.<br>
There are $N$ kinds of cheese in front of him.<br>
The deliciousness of the $i$-th kind of cheese is $A_i$ per gram, and $B_i$ grams of this cheese are available.<br>
The deliciousness of the pizza will be the total deliciousness of cheese he puts on top of the pizza.<br>
However, using too much cheese would make his boss angry, so the pizza can have at most $W$ grams of cheese on top of it.<br>
Under this condition, find the maximum possible deliciousness of the pizza.

## Constraints

- All values in input are integers.
- $1 \le N \le 3 \times 10^5$
- $1 \le W \le 3 \times 10^8$
- $1 \le A_i \le 10^9$
- $1 \le B_i \le 1000$

## Input

Input is given from Standard Input in the following format:

> $N$ $W$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_N$ $B_N$

## Output

Print the answer as an integer.

```input1
3 5
3 1
4 2
2 3
```

```output1
15
```

The optimal choice is to use $1$ gram of cheese of the first kind, $2$ grams of the second kind, and $2$ grams of the third kind.<br>
The pizza will have a deliciousness of $15$.

```input2
4 100
6 2
1 5
3 9
8 7
```

```output2
100
```

There may be less than $W$ grams of cheese in total.

```input3
10 3141
314944731 649
140276783 228
578012421 809
878510647 519
925326537 943
337666726 611
879137070 306
87808915 39
756059990 244
228622672 291
```

```output3
2357689932073
```