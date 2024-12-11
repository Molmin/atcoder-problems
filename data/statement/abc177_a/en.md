Score : $100$ points

## Problem Statement

Takahashi is meeting up with Aoki.

They have planned to meet at a place that is $D$ meters away from Takahashi's house in $T$ minutes from now.

Takahashi will leave his house now and go straight to the place at a speed of $S$ meters per minute.

Will he arrive in time?

## Constraints

- $1 \leq D \leq 10000$
- $1 \leq T \leq 10000$
- $1 \leq S \leq 10000$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $D$ $T$ $S$

## Output

If Takahashi will reach the place in time, print `Yes`; otherwise, print `No`.

```input1
1000 15 80
```

```output1
Yes
```

It takes $12.5$ minutes to go $1000$ meters to the place at a speed of $80$ meters per minute. They have planned to meet in $15$ minutes so he will arrive in time.

```input2
2000 20 100
```

```output2
Yes
```

It takes $20$ minutes to go $2000$ meters to the place at a speed of $100$ meters per minute. They have planned to meet in $20$ minutes so he will arrive just on time.

```input3
10000 1 1
```

```output3
No
```

He will be late.