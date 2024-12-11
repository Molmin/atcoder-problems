Score : $400$ points

## Problem Statement

Dolphin is planning to generate a small amount of a certain chemical substance C.<br>
In order to generate the substance C, he must prepare a solution which is a mixture of two substances A and B in the ratio of $M_a:M_b$.<br>
He does not have any stock of chemicals, however, so he will purchase some chemicals at a local pharmacy.<br>
The pharmacy sells $N$ kinds of chemicals. For each kind of chemical, there is exactly one package of that chemical in stock.<br>
The package of chemical $i$ contains $a_i$ grams of the substance A and $b_i$ grams of the substance B, and is sold for $c_i$ yen (the currency of Japan).<br>
Dolphin will purchase some of these packages. For some reason, he must use all contents of the purchased packages to generate the substance C.<br>
Find the minimum amount of money required to generate the substance C.<br>
If it is not possible to generate the substance C by purchasing any combination of packages at the pharmacy, report that fact.  

## Constraints

- $1 \leq N \leq 40$
- $1 \leq a_i,b_i \leq 10$
- $1 \leq c_i \leq 100$
- $1 \leq M_a,M_b \leq 10$
- $gcd(M_a,M_b)=1$
- $a_i$, $b_i$, $c_i$, $M_a$ and $M_b$ are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M_a$ $M_b$  
> 
> $a_1$ $b_1$ $c_1$  
> 
> $a_2$ $b_2$ $c_2$
> 
> $:$  
> 
> $a_N$ $b_N$ $c_N$

## Output

Print the minimum amount of money required to generate the substance C. If it is not possible to generate the substance C, print `-1` instead.

```input1
3 1 1
1 2 1
2 1 2
3 3 10
```

```output1
3
```

The amount of money spent will be minimized by purchasing the packages of chemicals $1$ and $2$.<br>
In this case, the mixture of the purchased chemicals will contain $3$ grams of the substance A and $3$ grams of the substance B, which are in the desired ratio: $3:3=1:1$.<br>
The total price of these packages is $3$ yen.  

```input2
1 1 10
10 10 10
```

```output2
-1
```

The ratio $1:10$ of the two substances A and B cannot be satisfied by purchasing any combination of the packages. Thus, the output should be `-1`.