配点 : $600$ 点

## 問題文

$N$ 枚のカードがあり，$1$ から $N$ までの番号がついています．
カード $i$ には整数 $A_i$ が書かれています．
なお，ここで $N$ は偶数です．

これから，すぬけ君と最小太郎君がゲームをします．
ゲームは $N$ ターンからなり，すぬけ君から始めて二人が交互にターンをプレイします．
各ターンでは，以下の操作を行います．

- すぬけ君のターン：まだ誰にも取られていないカードのうち，好きなものを一つ選び，取る．
- 最小太郎君のターン：まだ誰にも取られていないカードのうち，**番号**が最小のものを一つ選び，取る．

すぬけ君のスコアは，すぬけ君が取ったカードに書かれた整数の総和になります．
すぬけ君はスコアを最大化するように最適に行動します．

ところで，すぬけ君の大ファンであるあなたは，とある不正を行うことでスコアを最大化しようと考えています．
具体的には，ゲームの開始前に，あなたは以下の行動を一回行います．

- 整数 $k$ ($0 \leq k \leq N-1$) を選び，カードに書かれている整数を $k$ 個左に cyclic-shift する．
つまり，カード $1,2,\cdots,N$ に書かれている数を，$A_{k+1},A_{k+2},\cdots,A_N,A_1,\cdots,A_k$ に置き換える．

スコアを最大化するためにあなたが選ぶべき $k$ の値，およびその $k$ を選んだ場合のスコアを求めてください．

## 制約

- $2 \leq N \leq 2 \times 10^5$
- $N$ は偶数
- $1 \leq A_i \leq 10^9$
- 入力される値はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる．

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## 出力

以下の形式で答えを出力せよ．

> $k$ $s$

ここで $k$ はあなたが選ぶ整数 ($0 \leq k \leq N-1$) であり，$s$ はその $k$ を選んだ場合のスコアである．
なお，$s$ を最大化するような $k$ が複数存在する場合，どれを出力しても正解とみなされる．

```input1
4
3 4 1 2
```

```output1
1 7
```

$k=1$ を選ぶと，カード $1,2,3,4$ に書かれた整数は $4,1,2,3$ になります．
その後，ゲームは以下のように進行します．

- すぬけ君がカード $1$ を取る．
- 最小太郎君がカード $2$ を取る．
- すぬけ君がカード $4$ を取る．
- 最小太郎君がカード $3$ を取る．

このときのすぬけ君のスコアは $7$ になります．

なお，この例では $k=2,3$ でも正解になります．

```input2
2
1 1
```

```output2
0 1
```

```input3
10
716893678 779607519 555600775 393111963 950925400 636571379 912411962 44228139 15366410 2063694
```

```output3
7 3996409938
```