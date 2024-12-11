Score : $600$ points

## Problem Statement

For a string $S$ consisting of digits from `1` through `9`, let $f(S)$ be the string $T$ obtained by the following procedure.  ($S_i$ denotes the $i$-th character of $S$.)

- Let $T$ be an initially empty string.
- For $i=1, 2, \dots, |S| - 1$, perform the following operation:-   - Append $n$ copies of $S_i$ to the tail of $T$, where $n$ is the value when $S_{i+1}$ is interpreted as an integer.

For example, $S =$ `313` yields $f(S) =$ `3111` by the following steps.

- $T$ is initially empty.
- For $i=1$, we have $n = 1$.  Append one copy of `3` to $T$, which becomes `3`.
- For $i=2$, we have $n = 3$.  Append three copies of `1` to $T$, which becomes `3111`.
- Terminate the procedure.  We obtain $T =$ `3111`.

You are given a length-$N$ string $S$ consisting of digits from `1` through `9`.<br>
You repeat the following operation until the length of $S$ becomes $1$: replace $S$ with $f(S)$.<br>
Find how many times, modulo $998244353$, you perform the operation until you complete it.  If you will repeat the operation indefinitely, print `-1` instead.

## Constraints

- $2 \leq N \leq 10^6$
- $S$ is a length-$N$ string consisting of `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, and `9`.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the number of times, modulo $998244353$, that you perform the operation until you complete it.  If you will repeat the operation indefinitely, print `-1` instead.

```input1
3
313
```

```output1
4
```

If $S =$ `313`, the length of $S$ be comes $1$ after four operations.

- We have $f(S) =$ `3111`.  Replace $S$ with `3111`.
- We have $f(S) =$ `311`.  Replace $S$ with `311`.
- We have $f(S) =$ `31`.  Replace $S$ with `31`.
- We have $f(S) =$ `3`.  Replace $S$ with `3`.
- Now that the length of $S$ is $1$, terminate the repetition.

```input2
9
123456789
```

```output2
-1
```

If $S =$ `123456789`, you indefinitely repeat the operation.  In this case, `-1` should be printed.

```input3
2
11
```

```output3
1
```