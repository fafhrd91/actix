(function() {var implementors = {};
implementors["actix"] = [{"text":"impl Sync for SpawnHandle","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Sync for Addr&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;M&gt; Sync for Recipient&lt;M&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Sync for WeakAddr&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;M&gt; Sync for WeakRecipient&lt;M&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !Sync for Context&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A, I&gt; !Sync for ActorResponse&lt;A, I&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A, T&gt; !Sync for AtomicResponse&lt;A, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;M&gt; Sync for MessageResult&lt;M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;M as Message&gt;::Result: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;I&gt; !Sync for Response&lt;I&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !Sync for Supervisor&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl Sync for ActorState","synthetic":true,"types":[]},{"text":"impl Sync for Running","synthetic":true,"types":[]},{"text":"impl Sync for MailboxError","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !Sync for ContextParts&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A, C&gt; !Sync for ContextFut&lt;A, C&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for SendError&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Sync for AddressSender&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Sync for AddressReceiver&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !Sync for Envelope&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A, M&gt; Sync for Request&lt;A, M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;M as Message&gt;::Result: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;M&gt; !Sync for RecipientRequest&lt;M&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Sync for Mailbox&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Sync for Mocker&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Sync for Resolve","synthetic":true,"types":[]},{"text":"impl Sync for Connect","synthetic":true,"types":[]},{"text":"impl Sync for ConnectAddr","synthetic":true,"types":[]},{"text":"impl Sync for Resolver","synthetic":true,"types":[]},{"text":"impl !Sync for TcpConnector","synthetic":true,"types":[]},{"text":"impl Sync for ResolverError","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Sync for Finish&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, F&gt; Sync for Map&lt;A, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, A&gt; Sync for Ready&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, E, A&gt; Sync for FutureResult&lt;T, E, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Sync for StreamFinish&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, F, Fut, T&gt; Sync for StreamFold&lt;S, F, Fut, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Fut as IntoActorFuture&gt;::Future: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, F&gt; Sync for StreamMap&lt;S, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, F, U&gt; Sync for StreamThen&lt;S, F, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;U as IntoActorFuture&gt;::Future: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Sync for StreamTimeout&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, B, F&gt; Sync for Then&lt;A, B, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as IntoActorFuture&gt;::Future: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Sync for Timeout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F, A&gt; Sync for FutureWrap&lt;F, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, A&gt; Sync for StreamWrap&lt;S, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, B&gt; Sync for Either&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, E&gt; !Sync for Writer&lt;T, E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;I, T, U&gt; !Sync for FramedWrite&lt;I, T, U&gt;","synthetic":true,"types":[]},{"text":"impl&lt;I, S&gt; !Sync for SinkWrite&lt;I, S&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for Registry","synthetic":true,"types":[]},{"text":"impl !Sync for SystemRegistry","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Sync for SyncArbiter&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !Sync for SyncContext&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Condition&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !Sync for TimerFunc&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !Sync for IntervalFunc&lt;A&gt;","synthetic":true,"types":[]}];
implementors["actix_broker"] = [{"text":"impl Sync for ArbiterBroker","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Sync for Broker&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Sync for SystemBroker","synthetic":true,"types":[]}];
implementors["client"] = [{"text":"impl !Sync for ChatClient","synthetic":true,"types":[]},{"text":"impl Sync for ClientCommand","synthetic":true,"types":[]},{"text":"impl Sync for ChatCodec","synthetic":true,"types":[]},{"text":"impl Sync for ClientChatCodec","synthetic":true,"types":[]},{"text":"impl Sync for ChatRequest","synthetic":true,"types":[]},{"text":"impl Sync for ChatResponse","synthetic":true,"types":[]}];
implementors["server"] = [{"text":"impl Sync for Server","synthetic":true,"types":[]},{"text":"impl Sync for TcpConnect","synthetic":true,"types":[]},{"text":"impl Sync for ChatCodec","synthetic":true,"types":[]},{"text":"impl Sync for ClientChatCodec","synthetic":true,"types":[]},{"text":"impl Sync for ChatRequest","synthetic":true,"types":[]},{"text":"impl Sync for ChatResponse","synthetic":true,"types":[]},{"text":"impl Sync for Connect","synthetic":true,"types":[]},{"text":"impl Sync for Disconnect","synthetic":true,"types":[]},{"text":"impl Sync for Message","synthetic":true,"types":[]},{"text":"impl Sync for ListRooms","synthetic":true,"types":[]},{"text":"impl Sync for Join","synthetic":true,"types":[]},{"text":"impl Sync for ChatServer","synthetic":true,"types":[]},{"text":"impl Sync for Message","synthetic":true,"types":[]},{"text":"impl !Sync for ChatSession","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()