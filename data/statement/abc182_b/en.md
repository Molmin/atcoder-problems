Score : $200$ points

## Problem Statement

Given is an integer sequence $A$: $A_1, A_2, A_3, \dots, A_N$.<br>
Let the *GCD-ness* of a positive integer $k$ be the number of elements among $A_1, A_2, A_3, \dots, A_N$ that are divisible by $k$.<br>
Among the integers greater than or equal to $2$, find the integer with the greatest GCD-ness. If there are multiple such integers, you may print any of them.  

## Constraints

- $1 \le N \le 100$
- $2 \le A_i \le 1000$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1 \hspace{7pt} A_2 \hspace{7pt} A_3 \hspace{5pt} \dots \hspace{5pt} A_N$

## Output

Print an integer with the greatest GCD-ness among the integers greater than or equal to $2$. If there are multiple such integers, any of them will be accepted.

```input1
3
3 12 7
```

```output1
3
```

Among $3$, $12$, and $7$, two of them - $3$ and $12$ - are divisible by $3$, so the GCD-ness of $3$ is $2$.<br>
No integer greater than or equal to $2$ has greater GCD-ness, so $3$ is a correct answer.  

```input2
5
8 9 18 90 72
```

```output2
9
```

In this case, the GCD-ness of $9$ is $4$.<br>
$2$ and $3$ also have the GCD-ness of $4$, so you may also print $2$ or $3$.  

```input3
5
1000 1000 1000 1000 1000
```

```output3
1000
```