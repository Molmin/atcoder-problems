Score : $200$ points

## Problem Statement

Takahashi had $N$ glasses of liquor.

The amount and alcohol percentage of the $i$-th liquor were $V_i$ milliliters and $P_i$ percent by volume, respectively.

Takahashi gets drunk when his alcohol intake exceeds $X$ milliliters.

Which of the $N$ liquors was he drinking when he gets drunk? If he was not drunk even after drinking all the liquors, print `-1` instead.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 10^3$
- $0 \leq X \leq 10^6$
- $1 \leq V_i \leq 10^3$
- $0 \leq P_i \leq 100$

## Input

Input is given from Standard Input in the following format:

> $N$ $X$
> 
> $V_1$ $P_1$
> 
> $\vdots$
> 
> $V_N$ $P_N$

## Output

If Takahashi got drunk when drinking the $i$-th liquor, print $i$. If he was not drunk even after drinking all the liquors, print `-1` instead.

```input1
2 15
200 5
350 3
```

```output1
2
```

The $1$-st liquor contains $200\times \dfrac{5}{100}=10$ milliliters of alcohol.

The $2$-nd liquor contains $350\times \dfrac{3}{100}=10.5$ milliliters of alcohol.

His alcohol intake exceeds $15$ milliliters for the first time when drinking the $2$-nd liquor.

```input2
2 10
200 5
350 3
```

```output2
2
```

When his alcohol intake is exactly $X$ milliliters, he is still not drunk.

```input3
3 1000000
1000 100
1000 100
1000 100
```

```output3
-1
```

He seems to be immune to alcohol.