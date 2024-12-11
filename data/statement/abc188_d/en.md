Score : $400$ points

## Problem Statement

Snuke Inc. offers various kinds of services.<br>
A payment plan called Snuke Prime is available.<br>
In this plan, by paying $C$ yen (the currency of Japan) per day, you can use all services offered by the company without additional fees.<br>
You can start your subscription to this plan at the beginning of any day and cancel your subscription at the end of any day.

Takahashi is going to use $N$ of the services offered by the company.<br>
He will use the $i$-th of those services from the beginning of the $a_i$-th day until the end of the $b_i$-th day, where today is the first day.<br>
Without a subscription to Snuke Prime, he has to pay $c_i$ yen per day to use the $i$-th service.  

Find the minimum total amount of money Takahashi has to pay to use the services.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq C \leq 10^9$
- $1 \leq a_i \leq b_i \leq 10^9$
- $1 \leq c_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $C$
> 
> $a_1$ $b_1$ $c_1$
> 
> $\vdots$
> 
> $a_N$ $b_N$ $c_N$

## Output

Print the minimum total amount of money Takahashi has to pay.

```input1
2 6
1 2 4
2 2 4
```

```output1
10
```

He will use the $1$-st service on the $1$-st and $2$-nd days, and the $2$-nd service on the $2$-nd day.<br>
If he subscribes to Snuke Prime only on the $2$-nd day, he will pay $4$ yen on the $1$-st day and $6$ yen on the $2$-nd day, for a total of $10$ yen.<br>
It is impossible to make the total payment less than $10$ yen, so we should print $10$.

```input2
5 1000000000
583563238 820642330 44577
136809000 653199778 90962
54601291 785892285 50554
5797762 453599267 65697
468677897 916692569 87409
```

```output2
163089627821228
```

It is optimal to do without Snuke Prime.

```input3
5 100000
583563238 820642330 44577
136809000 653199778 90962
54601291 785892285 50554
5797762 453599267 65697
468677897 916692569 87409
```

```output3
88206004785464
```